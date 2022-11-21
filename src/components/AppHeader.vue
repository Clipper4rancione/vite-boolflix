<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <h1>NETFLICS</h1>
                </div>
                <div class="search-area">
                    <div class="row">
                        <div class="col-auto">
                            <input type="text" class="form-control" placeholder="Cerca Titoli...">
                        </div>
                        <div class="col-auto">
                            <div class="button btn btn-danger">
                                Cerca
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: #0f0f0f;
    }
    .header-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .logo {
            display: flex;
            align-items: center;
            color: red;
        }
    }
</style>