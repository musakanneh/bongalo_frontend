<template>
    <!-- <router-link to="/details" target="_blank"> -->
        <div @click="handleCardClick" class='horizontal-card'>
            <div class="img-div">
                <img :src="getThumbnail(apartment.main_image)" alt="">
            </div>

            <div class="details">
                <p class="location"><i class="fas fa-map-marker-alt"></i> {{apartment.country}} 
                    <span>
                        <i class="fas fa-bed"></i> {{apartment.available_rooms}} <i class="fas fa-shower"> {{apartment.number_of_bathrooms}} </i>
                    </span>
                </p>
                <p class="title"> {{apartment.title}} </p>
                <p class="amount"> <span>${{apartment.price}}</span> / night</p>
            </div>
        </div>
    <!-- </router-link> -->
</template>


<script>
export default {
     name:'horizontal-card',
     props:{
         apartment:{
             type:Object,
             required:true
         }
     },

     methods:{
         handleCardClick(){
             this.$store.dispatch('setCurrentApartment', {apartment: this.apartment})
             .then(res => {
                 this.$router.push({path:'/details?apartment='+this.apartment.uuid, query: {...this.apartment, ...this.$route.query}})
             })
             
         },
         getThumbnail(img){
             try {
                //  https://firebasestorage.googleapis.com/v0/b/alushare.appspot.com/o/property%2Fimages%2Fneldon1.jpg?alt=media&token=d955d9c1-482f-4a43-878a-802a3052809a
                let split = img.split('--bongalo_img--')
                let left = split[0] + "thumbnails%2F--bongalo_img--"
                let right = split[1]
                let rightsplit = right.split("-bongalo_img-")
                let tmp = rightsplit[0] + "-bongalo_img-_200x200" + rightsplit[1]
                let thumbnail = left + tmp
                return img
             } catch (error) {
                return img
             }
         }
     }
}
</script>


<style lang='scss' scoped>
a{
    text-decoration: none;
}
    .horizontal-card {
        width:100%;
        height: 300px;
        cursor: pointer;
        // display: grid;
        // grid-template-rows: 4fr 1fr;
        .img-div{
            height: 70%;

            img{
            width:100%;
            height: 100%;
            object-fit: cover;
            border-radius: 7px;
        }
        }

        .details{
            width:100%;
            height: 30%;
            margin-top: 20px;
            .location{
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 17px;
                color: #6A6A6A;
                margin-bottom: 7px;
                i{
                    margin-right: 5px;
                }

                span{
                    float: right;
                    
                }
            }

            .title{
                font-style: normal;
                // font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                display: flex;
                align-items: center;

                color: #404040;

            }

            .amount{

                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 19px;
                margin-top: 10px;
                color: #404040;

                span{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    color: #404040;
                }

            }
        }
    }   
</style>