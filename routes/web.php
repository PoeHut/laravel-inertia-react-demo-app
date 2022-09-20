<?php
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\HomeController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Auth routes
Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);

Route::middleware('auth')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::get("/user/create", function () {
        return Inertia::render("Users/UserCreate");
    })->can('create, App\Models\User');

    Route::post('/user', function (Request $request) {
        // validate form value
        $res = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'password' => ['required', 'max:50'],
        ]);

        // create form data
        User::create($res);

        // redirect back
        return redirect('/user');
    });

    Route::get("/user", function (Request $request) {
        return Inertia::render("Users/UserList", [
            "users" => User::query()
                ->when($request->search, function ($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($user) => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'can' => [
                        'edit' => Auth::user()->can('edit', $user),
                    ],
                ]),

            "filter" => $request->only("search"),
            "can" => [
                'create' => Auth::user()->can('create', User::class),
            ],
        ]);
    });

    Route::get("/contact", function () {
        return Inertia::render("Contact");
    });

    Route::post("/logout", [LoginController::class, 'logout']);
});
