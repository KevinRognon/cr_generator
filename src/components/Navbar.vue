

<template>

    <nav>
        <RouterLink to="/sav">Sav</RouterLink>
        <RouterLink to="/post-production">Post-Prod</RouterLink>
        <RouterLink to="/b2b">B2B</RouterLink>
    </nav>
    
</template>

<script></script>

<style scoped>

    .active {
        border: 3px solid white;
    }

    nav {
        height: 3rem;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        /* gap: 10%; */

        margin-bottom: 2rem;

        outline: 5px solid white;
    }

    nav a {
        /* background-color: #6b1919; */
        color: black;
        height: 100%;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3em;

        text-decoration: none;
    }

</style>