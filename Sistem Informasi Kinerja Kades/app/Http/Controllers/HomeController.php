<?php

namespace App\Http\Controllers;

use App\Models\Desa;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Project_Kades;
use Carbon\Carbon;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function admin(){
        return inertia('Admin', [
            'title' => 'Admin'
        ]);
    }

    public function home()
    {
        return inertia('Home', [
            'title' => 'Home',
            // 'data' => Kecamatan::where('id_kecamatan', '1')->with('kabupaten')->paginate(7),
            // 'data' => Kabupaten::with(['desa'])->paginate(7),
            'data' => Kabupaten::with(['desa'])->Filter(request('search'))->paginate(6),
        ]);
    }

    public function kecamatan(Kabupaten $kabupaten)
    {
        $id = $kabupaten->id;
        $dataKecamatan = Kabupaten::with('desa')->where('kabupaten', $kabupaten->kabupaten)->get();
        return inertia('Kecamatan', [
            'title' => 'Home',
            'data' => $dataKecamatan
        ]);
    }

    public function detailDesa(Request $request, Desa $desa)
    {
        // return $request->tahun;
        if($request->tahun == null){
            $year = Carbon::now()->year;
            $id_tahun=  $desa->id . '.' . $year;
            return inertia('Desa', [
                'title' => 'Home',
                'kabupaten' => $request->kabupaten,
                'kecamatan' => $request->kecamatan,
                'project' => Project_Kades::where('tahun', $id_tahun)->get(),
                'dataDesa' => $desa->load('project'),
                'slug' => $desa->slug,
                'tahun' => $request->tahun
            ]);
        }else{
            $year = $request->tahun;
            $id_tahun=  $desa->id . '.' . $year;
            return inertia('Desa', [
                'title' => 'Home',
                'kabupaten' => $request->kabupaten,
                'kecamatan' => $request->kecamatan,
                'project' => Project_Kades::where('tahun', $id_tahun)->get(),
                'dataDesa' => $desa->load('project'),
                'slug' => $desa->slug,
                'tahun' => $request->tahun
            ]);
        }
        
    }

    public function desa(Kabupaten $kabupaten)
    {
        $dataDesa = Desa::where('id_desa', $kabupaten->id)->paginate(2);
        return inertia('Desas', [
            'title' => 'Home',
            'data' => $dataDesa,
            'kabupaten' => $kabupaten->kabupaten,
            'kecamatan' => $kabupaten->nama_kecamatan
        ]);
    }
}
