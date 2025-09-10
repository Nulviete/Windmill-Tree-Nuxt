<template>
    <div class="pl-10">


    <div class="header"> Documents
    </div>

    <ul class="body">
        <li>1.1 Our statute</li>
        <li>1.2 Child Protection Policy</li>
        <li>1.3 KRS Entry</li>
    </ul>

    <div class="header">
        Reports of foundation activities
    </div>

    <ul class="body">
        <li>2.1 2022</li>
        <li>2.2 2023</li>
        <li>2.3 2024</li>
    </ul>
    <div class="header">
        Substantive reports
    </div>

    <ul class="body">
        <li>3.1 2022</li>
        <li>3.2 2023</li>
        <li>3.3 2024</li>
    </ul>
    <div class="header">
        Financial Statements
    </div>

    <ul class="body">
        <li>4.1 2022</li>
        <li>4.2 2023</li>
        <li>4.3 2024</li>
    </ul>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 40px;
}
.body, li {
        font-size: 36px;
}
.body {
    padding-bottom: 80px;
}
li {
    text-decoration: underline;
}

@media (max-width: 900px) {
    .header {
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 14px;
}
.body, li {
        font-size: 12px;
}
.body {
    padding-bottom: 14px;
}
}


</style>