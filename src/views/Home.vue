<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <!-- <scroll class="content"> -->
      <Swipe></Swipe>
      <recommend-view :recommends="recommend" />
      <feature></feature>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      />
      <!-- <good-list :good="goods[currentType].list"/> -->
    <!-- </scroll> -->
    <back-top></back-top>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../components/common/NavBar";
import Swipe from "../components/common/Swipe";
import RecommendView from "../components/common/RecommendView";
import Feature from "../components/common/Feature.vue";
import TabControl from "../components/content/tabControl/TabControl";
import BackTop from "../components/content/backTop/backTop"

import Scroll from "../components/common/scroll/scroll";
//import {getHomeMultidata} from "network/home"

import axios from "axios";

export default {
  name: "Home",
  components: {
    NavBar,
    Swipe,
    RecommendView,
    Feature,
    TabControl,
    Scroll,
    BackTop,
    BackTop
  },
  data() {
    return {
      goods: {
        pop: {},
        new: {},
        sell: {},
      },
      currentType: "pop",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      axios.get("http://localhost:8081/data.json").then(
        (response) => {
          //console.log(response.data);
          var data = response.data.imgList;
          console.log(data);
          var imgList = [];
          data.forEach((element) => {
            imgList.push(element.imgUrl);
          });
          var data2 = response.data.RecommendViewimg;
          console.log(data2);
          var RecommendViewimgList = [];
          data2.forEach((element) => {
            RecommendViewimgList.push(element.imgUrl);
          });
          that.$store.commit("getImgList", imgList);
          that.$store.commit("getRecommendViewimgList", RecommendViewimgList);
        },
        (response) => {
          console.log("error");
        }
      );
    },
    tabClick(index1) {
      console.log(index1);
      switch (index1) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
  // created(){
  //   //1.请求多个数据
  //   getHomeMultidata().then(res =>{
  //     console.log(res)
  //   })
  // }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  /* height: 100vh; */
}
.home-nav {
  background-color: pink;
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
/* .content{
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
