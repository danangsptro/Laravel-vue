<template>
    <div class="container mt-3">
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
        >
            Create
        </button>
        <!-- Modal -->
        <!-- <div
            class="spinner-border justify-content-center"
            role="status"
            aria-hidden="true"

        ></div> -->
        <div class="d-flex justify-content-center spinner-borderD" v-if="popupActivo">
            <div class="spinner-border text-warning" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            ref="newAddress"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Create Data
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            ref="closeModal"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Name:</p>
                        <input
                            type="text"
                            class="form-control"
                            v-model="posts.name"
                        />
                        <p>Umur:</p>
                        <input
                            type="number"
                            class="form-control"
                            v-model="posts.umur"
                        />
                        <p>Alamat:</p>
                        <input
                            type="text"
                            class="form-control"
                            v-model="posts.alamat"
                        />
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="saveCreate()"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            popupActivo: false,
            posts: [],
            errors: []
        };
    },
    methods: {
        async saveCreate() {
            const params = {
                name: this.posts.name,
                umur: this.posts.umur,
                alamat: this.posts.alamat
            };
            this.popupActivo = true;
            axios
                .post("api/crudsPost", params)
                .then(response => {
                    console.log(response);
                    const data = response.data.data;
                    this.$emit("addItem", data);
                    this.posts.push(data);
                    this.$refs.closeModal.click()
                    this.popupActivo = false;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
};
</script>

<style scoped>
.spinner-borderD {
    width: 100%;
    height: 100vh;
    background: rgb(0, 0, 0, .6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
}
.spinner-border{
    margin-top: 20%;
}
</style>
