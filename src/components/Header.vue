<template>
	<div id="header">
        <h1 id="header_h1"><slot></slot></h1>
    </div> 
</template>
<script>
export default {
	name:'Hearder',
}
</script>
<style scoped>
#header {
    width: 100%;
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: flex;
    position: relative;
    text-align: center;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
#header_h1 {
    flex: 1;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>

