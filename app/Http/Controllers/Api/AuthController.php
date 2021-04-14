<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(['jwtauth'])->except('login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only(
            'email',
            'password'
        );

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'data'   => 'Account is not activate'
            ], 401);
        }
        return response()->json([
            'success' => true,
            'token'   => $token
        ], 200);
    }
    public function checkToken()
    {
        $me = Auth::user();
        return response([
            'success' => true,
            'data'  => $me
        ]);
    }

    public function logout()
    {
        Auth::guard('api')->logout(true);
        return response()->json([
            'success' => true,
            'data' => 'Has logout'
        ], 200);
    }

    // public function register(Request $request)
    // {
    //     $v = Validator::make($request->all(), [
    //         'name'      =>  'required|min:3',
    //         'email'     =>  'required|email|unique:users',
    //         'password'  =>  'required|min:3|confirmed',
    //     ]);
    //     if ($v->fails())
    //     {
    //         return response()->json([
    //             'status'    =>  'error',
    //             'errors'    =>  $v->errors()
    //         ], 422);
    //     }
    //     $user = new User();
    //     $user->name     =   $request->name;
    //     $user->email    =   $request->email;
    //     $user->password =   bcrypt($request->password);
    //     $user->save();
    //     return response()->json([
    //         'status'    =>  'Success',
    //     ], 200);
    // }
}
