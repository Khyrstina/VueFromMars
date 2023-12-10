<template>

<h1 class="newsHeaderText" v-if="feed">{{feed.title}}</h1>
<h2 class="newsHeaderText" v-if="feed">{{ feed.description }}</h2>
<div class="returnedItems">
    <div class="item" v-for="(item, index) of items" :key="index" > 
    <div class="contentItem">
    <h3 class="newsTitle"> {{ item.title }}</h3>
            <h5> {{ item.pubDate }} </h5>
        <img :src="item.enclosure.link" alt="item.title" @error="handleImageError" />
        <p class="description" v-html="extractText(item.description)"></p>
        <button class="button-shadow-border button-shadow" v-on:click="goToLink(item.link)">Read More</button>
        



    </div>

    <!-- <div class="contentItem" v-html="item.description"> </div> -->

    </div> 
</div>
</template>

<script>



export default {
    name: "nasaNews",
    data() {
        return {
            rssUrl: "https://mars.nasa.gov/rss/api/?feed=news&category=all&feedtype=rss",
            items: [],
            feed: {},
            currentItem: null,
        };
    },
    methods: {
        getRss() {
            fetch("https://api.rss2json.com/v1/api.json?rss_url=" + this.rssUrl)
                .then((res) => res.json())
                .then((data) => {
                    this.feed = data.feed;
                    this.items = data.items;
                    console.log(data);
                });
        },
        extractText(str) {
        const match = str.match(/<br\s*\/?>([^<]*)<\/p>/);
        console.log(match ? match[1].trim() : '');
        return match ? match[1].trim() : '';
    },
    goToLink(link) {
        window.open(link, "_blank");
    },
    handleImageError(event) {
        event.target.src = "../src/assets/fourOhFour.png";
    },
},
    mounted() {
        this.getRss();
    },

};
</script>

<style scoped>
@import url(../assets/buttons.css);

 div.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
}

div.sectionView div.returnedItems div.contentItem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
}


.contentItem {
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    height: auto;
    align-self: center;
}

.item img {
    width: 100%;
    height: auto;
    margin: 10px;
    border-radius: 5px;
}


.newsHeaderText{
    text-align: center;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    height: auto;
    align-self: center;
}

a .readMoreButton{
    text-decoration: none;
}

</style>
```


