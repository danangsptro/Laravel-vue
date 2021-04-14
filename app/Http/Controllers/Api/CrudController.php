<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\crud;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    public function index()
    {
        $cruds = crud::all();

        return response()->json([
            'message'   => true,
            'data'      => $cruds
        ]);
    }

    public function store(Request $request)
    {
        $cruds = new crud();
        $cruds->name    = $request->get('name');
        $cruds->umur    = $request->get('umur');
        $cruds->alamat  = $request->get('alamat');
        $cruds->save();

        return response()->json([
            'status'  =>  true,
            'data'    => $cruds
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd($request->all());
        $name   =   $request->get('name');
        $umur   =   $request->get('umur');
        $alamat =   $request->get('alamat');

        $cruds  =   crud::find($id);

        if (!$cruds) return response()->json([
            'status' => false,
            'data' => 'Invalid id'
        ]);

        $cruds->name    = $name;
        $cruds->umur    = $umur;
        $cruds->alamat  = $alamat;
        $cruds->save();

        return response()->json([
            'status'  =>  true,
            'data'    =>  $cruds
        ]);
    }

    public function delete($id)
    {
        $cruds = crud::find($id);
        $cruds->delete();

        return response()->json([
            'status'  => true,
            'data'    => 'Data berhasil di hapus'
        ]);
    }
}
