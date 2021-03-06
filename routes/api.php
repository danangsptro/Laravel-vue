<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['namespace' => 'Api'], function() {
    Route::post('login', 'AuthController@login');
    Route::post('checkToken', 'AuthController@checkToken');
    Route::post('logout', 'AuthController@logout');
    Route::post('admin', 'AdminController@index');
    // Crud
    Route::get('cruds', 'CrudController@index');
    Route::post('crudsPost', 'CrudController@store');
    Route::post('crudsUpdate/{id}', 'CrudController@update');
    Route::delete('crudsDelete/{id}', 'CrudController@delete');
    // Route::post('register', 'AuthController@register');
});
