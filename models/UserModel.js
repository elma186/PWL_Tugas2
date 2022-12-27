import mongoose from "mongoose";

const User = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nik: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  divisi: {
    type: String,
    required: true,
  },
  jabatan: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", User);
