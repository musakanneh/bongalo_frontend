<template>
    <div class='event-card'>
        <h3>
            {{ label }}
        </h3>

        <div class="inner-content">
            <VerticalCard v-for="event in events" :key=event.id :event=event :link=link></VerticalCard>
        </div>
    </div>
</template>


<script>

import VerticalCard from '../components/VerticalCard';


export default {
     name:'event-card',
     props:{
         events:{
             type:Array,
             required:true
         },
         label:{
             type:String,
             required:true
         },

         link:{
            type:String,
            required:true
         }
     },
     components:{
         VerticalCard
     },
     data:function(){
         return {
             
         }
     }

}
</script>


<style lang='scss' scoped>

@media only screen and (max-width: 900px){

    .event-card {
        position: relative;
        top: 0 !important;
        // margin-top: 20px;
       
        // border:1px solid green;
        width:100%;
        background: #fff;
        height: auto !important;
        border-radius: 0 !important;;
        padding: 0px !important;

        .inner-content{
                grid-template-columns: repeat(1, 1fr) !important;

            }
    }
}

    .event-card {
        position: relative;
        top:-60px;
       
        // border:1px solid green;
        width:100%;
        background: #fff;
        height: 500px;
        border-radius: 20px 20px 0 0;
        padding: 30px;

        h3{
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            display: flex;
            align-items: center;

            color: #404040;
        }

        .inner-content{
            // border:1px solid red;
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-column-gap: 32px;
            grid-row-gap: 40px;
        }
    }
</style>