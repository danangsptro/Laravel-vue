<template>
    <div>
        <div class="jumbotron jumbotron-fluid m-5 text-center">
            <div class="container">
                <h1 class="display-4">login Success</h1>
                <p class="lead">You are logged in</p>
                <button class="btn btn-success" @click="logout">logout</button>
            </div>
        </div>
        <div class="container">
            <modal-crud class="mb-4" @addItem="addItem"></modal-crud>
            <!-- Add Edit -->
            <div class="row mb-4">
                <div class="col-lg-4" v-if="stateEdit === 'edit'">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="put.name"
                    />
                    <label for="exampleInputEmail1">Umur</label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="put.umur"
                    />
                    <label for="exampleInputEmail1">Alamat</label>
                    <input
                        type="text"
                        class="form-control mb-3"
                        v-model="put.alamat"
                    />
                    <button class="btn btn-success" @click="updateData()">Save</button>
                    <button
                        class="btn btn-danger"
                        v-if="stateEdit === 'edit'"
                        @click="changeEdit('defaultEdit')"
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <!-- Close Edit -->
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(article, index) in posts" :key="article.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ article.name }}</td>
                        <td>{{ article.umur }}</td>
                        <td>{{ article.alamat }}</td>
                        <td>
                            <!-- <button class="btn btn-success" @click="onEdit(article, index)" >Edit</button> -->
                            <button
                                class="btn btn-success"
                                @click="onEdit(article, index)"
                                v-if="stateEdit === 'defaultEdit'"
                            >
                                Edit
                            </button>
                            <button
                                class="btn btn-danger"
                                @click="deleteCruds(article.id, index)"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import modalCrud from "./components/Create";

export default {
    name: "Dashboard",

    components: {
        modalCrud
    },
    data() {
        return {
            put: {
                name: "",
                umur: "",
                alamat: ""
            },
            idEdit: null,
            indexEdit: null,
            // status_popup: false,
            posts: [],
            errors: [],
            stateEdit: "defaultEdit"
        };
    },
    mounted() {
        if (this.$store.state.token !== "") {
            axios
                .post("/api/checkToken", { token: this.$store.state.token })
                .then(response => {
                    if (!response.data.success) {
                        this.$store.commit("setToken", response.data.token);
                    }
                })
                .catch(e => {
                    this.$router.push("/login");
                });
        } else {
            this.$router.push("/login");
        }
    },
    methods: {
        logout() {
            axios
                .post("/api/logout", { token: this.$store.state.token })
                .then(response => {
                    this.$store.commit("clearToken");
                    this.$router.push("/");
                });
        },
        indexCruds() {
            axios.get(`api/cruds`).then(response => {
                const data = response.data.data;
                this.posts = data;
            });
        },
        deleteCruds(id, index) {
            axios
                .delete(`/api/crudsDelete/` + id)
                .then(response => {
                    console.log(response);
                    this.posts.splice(index, 1);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
        onEdit(item, index) {
            this.put.name = item.name;
            this.put.umur = item.umur;
            this.put.alamat = item.alamat;
            this.idEdit = item.id;
            this.indexEdit = index;
            // this.status_popup = true;
            this.stateEdit = "edit";
        },
        addItem(params) {
            this.posts.push(params);
        },
        changeEdit(newEdit) {
            this.stateEdit = newEdit;
            // this.name = "";
            // this.umur = "";
            // this.alamat = "";
        },
        updateData() {
            axios.post(`api/crudsUpdate/${this.idEdit}`, {
                name: this.put.name,
                umur: this.put.umur,
                alamat: this.put.alamat
            })
            .then(response => {
                const data = response.data.data
                this.posts[this.indexEdit].name = data.name
                this.posts[this.indexEdit].umur = data.umur
                this.posts[this.indexEdit].alamat = data.alamat
                this.idEdit = null
                this.indexEdit = null
                this.stateEdit = 'defaultEdit'
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    },
    created() {
        this.indexCruds();
    }
};
</script>
