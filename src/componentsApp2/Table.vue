<template>
    <tr>
        <td>
            <i class="fa fa-map-marker"></i>
        </td>
        <td>
            {{ portfolio.acf.dostepnosc }}
        </td>
        <td>
            {{ portfolio.acf.pietro }}
        </td>
        <td>
            {{ portfolio.acf.powierzchnia }}
        </td>
        <td>
            <a href="#" class="fusion-background-highlight"><span class="fusion-button button-default button-large">KONTAKT</span></a>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['portfolio']

    }
</script>

<style>

</style>
