<template>
    <div class="container">
        <!-- Button trigger modal -->
        <!-- <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalLong"
        >
            Edit
        </button> -->

        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                            Edit
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Name:</p>
                        <input
                            type="text"
                            class="form-control"
                            v-model="putName.name"
                        />
                        <p>Umur:</p>
                        <input
                            type="number"
                            class="form-control"
                            v-model="putName.umur"
                        />
                        <p>Alamat:</p>
                        <input
                            type="text"
                            class="form-control"
                            v-model="putName.alamat"
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
                        <button type="button" class="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showDialog: false,
        putName: {
            type: Object,
            default: () => null
        }
    },
    // computed: {
    //     show: {
    //         get() {
    //             return this.showDialog;
    //         },
    //         set() {
    //             this.$emit("close");
    //         }
    //     }
    // }
    watch: {
        showDialog(value) {
            console.log(value);
        }
    },

    methods: {
        openDialog() {
            if (this.showDialog === true)
                return $("exampleModalLong").modal("show");
        }
    }
};
</script>
