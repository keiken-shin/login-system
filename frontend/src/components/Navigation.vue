<template>
    <header class="h-16 flex items-center px-6 header">
        <div class="logo flex-1">
            <h1 class="text-xl text-gray-900 font-medium">Assignment - <span class="text-orange-400">Agrex</span></h1>
        </div>

        <nav class="flex-1 flex justify-end">
            <ul>
                <li>
                    <router-link to="/logout" exact 
                        class="border border-solid border-gray-700 text-gray-700 px-4 py-2 rounded-lg"
                    >
                        <i class="fas fa-power-off mr-2"></i>Logout
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .header{
        border-bottom-left-radius: 17px;
        border-bottom-right-radius: 17px;
        background-color: #fff;
    }
</style>