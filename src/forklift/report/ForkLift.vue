<template>
  <div>
    <div class="mt-3">
      <el-card class="box-card">
        <div class="row">
          <div class="col-md-5 col-xs-12 info">
            <h4 class="my-4">
              <b><i class=""></i> View Report</b>
            </h4>

            <el-card
              class="mt-2"
              style="background: whitesmoke; border-radius: 10px"
              shadow="never"
            >
              <div class="row my-1">
                <div class="col-sm-6"><b>Vechile</b></div>
                <div class="col-sm-6">2132312</div>
              </div>
              <div class="row my-1">
                <div class="col-sm-6"><b>Plate No: </b></div>
                <div class="col-sm-6">+983 37281371092</div>
              </div>
              <div class="row my-1">
                <div class="col-sm-6"><b>Driver: </b></div>
                <div class="col-sm-6">Ahmed Ali</div>
              </div>
              <div class="row my-1">
                <div class="col-sm-6"><b>Contact: </b></div>
                <div class="col-sm-6">+93218932179</div>
              </div>
            </el-card>
            <el-card
              class="mt-3"
              style="background: whitesmoke; border-radius: 10px"
              shadow="never"
            >
              <h5><b>Issue</b></h5>
              <p>Right front Type need Repair</p>
              <h5><b>Description</b></h5>
              <p>The tires are worn out and needs tp be replaced</p>
            </el-card>
            <h5 class="my-3 mt-4"><b>Additional comments:</b></h5>
            <el-card
              style="height: 150px; background: whitesmoke; border-radius: 10px"
              shadow="never"
            ></el-card>
            <el-card
              class="mt-3"
              style="background: whitesmoke; border-radius: 10px"
              shadow="never"
            >
              <div class="row select">
                <div class="col-lg-6 col-sm-5"><b>Select an autoshop</b></div>
                <div class="col-lg-4 col-sm-5">
                  <el-select v-model="selectVal" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="col-lg-2 col-sm-2">
                  <span class="plus"><i class="el-icon-plus"></i></span>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-lg-6 col-sm-6 date-picker">
                  <b>Select date to send for repair</b>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="Pick a day"
                  >
                  </el-date-picker>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-7 col-xs-12 text-right my-4">
            <div class="row">
              <ul class="list-unstyled header-card">
                <li class="mr-2"><b>Priority:</b></li>
                <li class="bg ml-2 mr-5">
                  <span><b>High</b></span>
                </li>
                <li class="ml-5 mr-3"><b>Current Status:</b></li>
                <li class="dot mr-4"><span></span> Not In Repair</li>
              </ul>
            </div>
            <Slider />
            <div class="row">
              <ul class="list-unstyled footer-card">
                <li class="mr-2"><b>Cost:</b></li>
                <li class="mr-5">
                  <span><b>800$</b></span>
                </li>
                <li class="mr-4">
                  <button class="btn">Send to Autoshop</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
export default {
  name: "App",
  components: {
    Slider,
  },
  data() {
    return {
      value1: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      selectVal: "",
    };
  },
  methods: {},
};
</script>

<style>
.comments {
  height: 200px !important;
}
.info .date-picker {
  font-size: 15px;
  line-height: 40px;
}
.info .select span.plus {
  background: rgb(87 165 87);
  color: white;
  width: 40px;
  height: 40px;
  display: inline-flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  transform: translateY(0px);
}
.footer-card button:hover,
.info .select span.plus:hover {
  background: rgb(122 193 122);
  box-shadow: 0px 0px 8px 1px #8bd2676b;
  transform: translateY(-1px);
}
.footer-card,
.header-card {
  width: 100%;
}
.footer-card li,
.header-card li {
  display: inline-block;
  font-size: 18px;
}
.header-card li.bg span {
  background: #e4676717;
  color: red;
  padding: 5px 10px;
  display: inline-block;
}
.header-card li.dot span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  background: red;
}
.footer-card span {
  padding: 12px 20px;
  background: whitesmoke;
  font-size: 18px;
}
.footer-card button {
  background: rgb(87 165 87);
  border-radius: 2px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  transition: 0.2s;
  position: relative;
  top: -2px;
  transform: translateY(0px);
}
</style>
