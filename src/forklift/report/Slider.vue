<template>
  <div>
    <div
      :id="'slider-' + uid"
      :class="'carousel-' + uid"
      class="carousel slider-carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div class="carousel-indicators">
        <div
          class="indicators-item"
          :class="{
            active: index === firstItemIndexGetter,
            first: index === 0,
            last: index + 1 === items.length,
          }"
          v-for="(item, index) in items"
          :key="index"
          :data-target="'#slider-' + uid"
          :data-slide-to="`${index}`"
          @click="sliderIndicatorClicked(index)"
        >
          <slot name="indicatorArea" :item="item"></slot>
        </div>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(item, index) in sliderList"
          :key="index"
        >
          <slot name="sliderArea" :item="item">
            <span
              v-if="item.icon && item.icon != null"
              class="simple-indicator"
            ></span>
          </slot>
        </div>
      </div>
      <span class="carousel-control-prev">
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
          @click="iconClicked('prev')"
        ></span>
      </span>
      <span class="carousel-control-next">
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
          @click="iconClicked('next')"
        ></span>
      </span>
    </div>
    <div class="d-flex justify-content-center align-items-center caption">
      <h3 class="m-0 font-weight-bold">{{ this.caption }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    items: {
      required: true,
      default: [
        {
          title: "name 1",
          values: "https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg",
          icon: "https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg",
        },
        {
          title: "name 2",
          values: "this.solutionData.sensors[name]",
          icon: "https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg",
        },
        {
          title: "name 3",
          values: "this.solutionData.sensors[name]",
          icon: "https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg",
        },
        {
          title: "name 4",
          values: "this.solutionData.sensors[name]",
          icon: "https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg",
        },
        {
          title: "name 5",
          values: "this.solutionData.sensors[name]",
          icon: "https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg",
        },
      ],
    },
    /**
     * @desc determine the first item to show
     * @return integer
     * @author karam mustafa
     * */
    firstItemIndex: {
      default: 1,
    },
    /**
     *
     * @return integer
     * @author karam mustafa
     * */
    firstItem: {
      default: 1,
    },
    /**
     * @desc determine the first item to show
     * @return integer
     * @author karam mustafa
     * */
    lastItem: {
      default: 2,
    },
    /**
     * @desc determine the active item to show
     * @return integer
     * @author karam mustafa
     * */
    activeIem: {
      default: 1,
    },
    /**
     * @desc determine the count in indicator slider items to show ,  the default is 3 items
     * @return integer
     * @author karam mustafa
     * */
    countOfElementShown: {
      default: 8,
    },
    /**
     * @return integer
     * @author karam mustafa
     * */
    countOfElementHiddenPrev: {
      default: 3,
    },
    /**
     * @return integer
     * @author karam mustafa
     * */
    countOfElementHiddenNext: {
      default: 3,
    },
    /**
     * @desc this props for determine if we want from slider to move if we click
     * on next icon then slider will hidden the first 5 items for example , depending on countOfElementHiddenNext
     * on prev icon then slider will hidden the last 5 items for example , depending on countOfElementHiddenPrev
     * @return boolean
     * @author karam mustafa
     * */
    slideMove: {
      default: true,
    },
    /**
     * @desc when you change the count of indicator shown , you must modify this value with the same changes value
     * @example if you want to show 5 items , you must make default value is 3
     * @return integer
     * @author karam mustafa
     * */
    centerElementPrevIndex: {
      default: 1,
    },
    /**
     * @desc when you change the count of indicator shown , you must modify this value with the same changes value
     * @example if you want to show 5 items , you must make default value is 4
     * * @return integer
     * @author karam mustafa
     * */
    centerElementNextIndex: {
      default: 2,
    },
  },
  data() {
    return {
      caption: "",
      sliderList: null,
    };
  },
  mounted() {
    this.buildIndicator();
  },
  computed: {
    /**
     * @desc get current vue js component uid
     * @return mixed
     * @author karam mustafa
     * */
    uid() {
      return this._uid;
    },
    /**
     * @desc determine page direction
     * @return mixed
     * @author karam mustafa
     * */
    isRTL() {
      return false;
    },
    /**
     * @desc get all active indicators
     * @return mixed
     * @author karam mustafa
     * */
    allActive() {
      return this.parentCarousel.querySelectorAll(
        `.carousel-indicators .active`
      );
    },
    /**
     * @desc get all indicators
     * @return mixed
     * @author karam mustafa
     * */
    allIndicators() {
      return this.parentCarousel.querySelectorAll(
        `.carousel-indicators .indicators-item`
      );
    },
    /**
     * @desc get current component
     * @return mixed
     * @author karam mustafa
     * */
    parentCarousel() {
      return document.querySelector(`.carousel-${this.uid}`);
    },
    /**
     * @desc get current component
     * @return mixed
     * @author karam mustafa
     * */
    countOfElementShownGetter: {
      get() {
        return this.countOfElementShown;
      },
      set(newValue) {
        return newValue;
      },
    },
    firstItemIndexGetter: {
      get() {
        return parseInt(this.firstItemIndex);
      },
      set(newValue) {
        return newValue;
      },
    },
    centerElementPrevIndexGetter: {
      get() {
        return this.centerElementPrevIndex;
      },
      set(newValue) {
        return newValue;
      },
    },
    centerElementNextIndexGetter: {
      get() {
        return this.centerElementNextIndex;
      },
      set(newValue) {
        return newValue;
      },
    },
    lastItemGetter: {
      get() {
        return this.lastItem;
      },
      set(newValue) {
        return newValue;
      },
    },
    firstItemGetter: {
      get() {
        return this.firstItem;
      },
      set(newValue) {
        return newValue;
      },
    },
  },
  methods: {
    /**
     * @desc this function is responsible for building indicator and caption or any extra data in the first load
     * @author karam mustafa
     * */
    buildIndicator() {
      let indicators = this.parentCarousel.querySelectorAll(
        `.carousel-indicators .indicators-item`
      );
      indicators.forEach((item) => {
        if (
          this.getDataAttribute(item, "slideTo") + 1 >
          this.countOfElementShownGetter
        ) {
          item.classList.add("hidden");
          item.classList.remove("active");
        }
      });
      this.checkIfCountShownGreeterItems();
      this.resetExtraData();
      this.checkAllIcons();
    },
    /**
     * @param element
     * @param callback
     * @return callback
     * @author karam mustafa
     * */
    checkIfElementNotNull(element, callback) {
      return element != null && element != undefined ? callback(element) : "";
    },
    /**
     * @desc reset slider items and caption to first element want to shown
     * @return void
     * @author karam mustafa
     * */
    resetExtraData() {
      this.checkIfElementNotNull(this.firstItemIndexGetter, (item) => {
        this.sliderList = [
          this.items[item] != undefined ? this.items[item] : this.items[0],
        ];
        this.caption =
          this.items[item] != undefined
            ? this.items[item].title
            : this.items[0].title;
      });
    },
    /**
     * @desc this function handle logic when actor click in prev icon
     * the function is check if we get first element and check of slider icons shown
     * @return void
     * @author karam mustafa
     * */
    prevIconClicked() {
      let currentActiveIndicatorItem = this.parentCarousel.querySelector(
        `.carousel-indicators .active`
      );
      let currentSlideTo =
        parseInt(currentActiveIndicatorItem.dataset.slideTo) - 1;
      this.checkIfElementExists(
        this.implementPrevSensor(currentActiveIndicatorItem, currentSlideTo),
        (prevEl) => {
          this.implementCenterElement(
            currentSlideTo,
            currentSlideTo - this.centerElementPrevIndexGetter,
            currentSlideTo + this.centerElementNextIndexGetter
          );
          // if this previous element have hidden class we will remove it and re calculate 5 element to show them
          this.checkElementContains(prevEl, "hidden", (item) => {
            let currentSlideTo =
              this.getDataAttribute(currentActiveIndicatorItem, "slideTo") +
              this.countOfElementHiddenPrev;
            this.implementHiddenElement(currentSlideTo, ">=", item);
            // now logically the next icon should enabled
            this.unDisableIcon("next");
            // we re check , to valid if we in the first item in list
            this.checkIconStatus(item, "prev", "first");
            this.sliderList = this.items.slice(
              this.firstItemGetter,
              this.lastItemGetter - 1
            );
          });
        }
      );
    },
    /**
     * @desc this function handle logic when actor click in next icon
     * the function is check if we get last element and check of slider icons shown
     * @return void
     * @author karam mustafa
     * */
    nextIconClicked() {
      let currentActiveIndicatorItem = this.parentCarousel.querySelector(
        `.carousel-indicators .active`
      );
      let currentSlideTo = this.getDataAttribute(
        currentActiveIndicatorItem,
        "slideTo"
      );
      let nextElement = this.implementForNextSensor(
        currentActiveIndicatorItem,
        currentSlideTo
      );
      this.checkIfElementExists(nextElement, (item) => {
        this.implementCenterElement(
          currentSlideTo,
          currentSlideTo + this.centerElementNextIndexGetter,
          currentSlideTo - this.centerElementPrevIndexGetter
        );
        if (item.classList.contains("hidden")) {
          this.implementHiddenElement(
            (currentSlideTo -= this.countOfElementHiddenPrev),
            "<=",
            item
          );
        }
      });
    },
    /**
     * @param index
     * @desc this function handle if actor click custom slider icon , not prev or next icons
     * @return void
     * @author karam mustafa
     * */
    sliderIndicatorClicked(index) {
      let currentActiveIndicatorItem = this.parentCarousel.querySelector(
        `.carousel-indicators .active`
      );
      let itemsIndexToAdd = [0, 1, -1, -2, +2];
      let elementToActive = [];
      itemsIndexToAdd.forEach((item) => {
        elementToActive.push(
          this.parentCarousel.querySelector(`[data-slide-to='${index + item}']`)
        );
      });
      // to check if user dos not click in same slider indicator
      if (
        this.getDataAttribute(currentActiveIndicatorItem, "slideTo") !== index
      ) {
        this.checkIfElementExists(currentActiveIndicatorItem, (item) =>
          item.classList.remove("active")
        );
        if (!this.checkIfCountShownGreeterItems(true))
          this.rerenderAfterClick(elementToActive);
        this.checkIfElementExists(elementToActive[0], (item) =>
          item.classList.add("active")
        );
        this.sliderIndicatorClickedProcess(index);
        this.checkAllIcons().sliderShownProcess(index);
      }
    },
    /**
     * @param  currentSlideTo
     * @desc show the chart which related to this indicator element
     * @return string
     * @author karam mustafa
     * */
    sliderShownProcess(currentSlideTo) {
      this.sliderList = [this.items[currentSlideTo]];
      return (this.caption = this.items[currentSlideTo].title);
    },
    /**
     * @param  first
     * @param  last
     * @desc show the chart which related to this indicator element
     * @return string
     * @author karam mustafa
     * */
    unActiveFirstAndActiveLast(first) {
      this.checkIfElementExists(() => (item) =>
        item.classList.remove("active")
      );
      this.checkIfElementExists(() => (item) => item.classList.add("active"));
      return first;
    },
    /**
     * @param currentActiveIndicatorItem
     * @param currentSlideTo
     * @desc handle lagre logic when prev icon clicked
     * @return void
     * @author karam mustafa
     * */
    implementPrevSensor(currentActiveIndicatorItem, currentSlideTo) {
      let prevElement = this.unActiveFirstAndActiveLast(
        currentActiveIndicatorItem,
        this.parentCarousel.querySelector(`[data-slide-to='${currentSlideTo}']`)
      );
      // replace title
      this.sliderIndicatorClicked(currentSlideTo);
      this.sliderShownProcess(currentSlideTo);
      // check from icon status
      this.checkIconStatus(prevElement, "prev", "first");
      this.unDisableIcon("next");
      return prevElement;
    },
    /**
     * @param currentActiveIndicatorItem
     * @param currentSlideTo
     * @desc handle lagre logic when next icon clicked
     * @return void
     * @author karam mustafa
     * */
    implementForNextSensor(currentActiveIndicatorItem, currentSlideTo) {
      this.checkIconStatus(currentActiveIndicatorItem, "next", "last");
      if (this.allActive.length > 0) this.unDisableIcon("prev");
      this.checkIconStatus(currentActiveIndicatorItem, "next", "last");
      let nextElement = this.unActiveFirstAndActiveLast(
        currentActiveIndicatorItem,
        this.parentCarousel.querySelector(
          `[data-slide-to='${currentSlideTo + 1}']`
        )
      );
      this.sliderIndicatorClicked(currentSlideTo + 1);
      this.sliderShownProcess(currentSlideTo + 1);
      this.checkIconStatus(nextElement, "next", "last");
      return nextElement;
    },
    /**
     * @param index
     * @return void
     * @desc we separate duplicated logic in one method ,  this will handle logic when indicator clicked
     * @author karam mustafa
     * */
    sliderIndicatorClickedProcess(index) {
      let checkFirstNotHidden = this.getElementsNotHidden("hidden");
      let firstItemToRender = index - this.centerElementNextIndexGetter;
      let secondItemToRender = index + this.centerElementPrevIndexGetter;
      let firstItemShown = this.getDataAttribute(
        checkFirstNotHidden[0],
        "slideTo"
      );
      if (!this.checkIfCountShownGreeterItems(true)) {
        if (firstItemShown === index) {
          this.unDisableIcon("next");
          firstItemToRender = index + this.centerElementNextIndexGetter;
          secondItemToRender = index - this.centerElementPrevIndexGetter;
        } else {
          this.unDisableIcon("prev");
        }
        this.checkIfElementExists(
          this.getElementByDataAttribute(index),
          (el) => {
            if (
              !el.classList.contains("first") &&
              !el.classList.contains("last")
            ) {
              let className = "hidden";
              this.hiddenElementByData(firstItemToRender, (item) =>
                item.classList.add(className)
              );
              this.hiddenElementByData(secondItemToRender, (item) =>
                item.classList.remove(className)
              );
            }
          }
        );
      }
    },
    /**
     * @param firstVal
     * @param currentSlideTo
     * @return void
     * @desc to center element when next or prev icon clicked
     * @param secondVal
     * @author karam mustafa
     * */
    implementCenterElement(currentSlideTo, firstVal, secondVal) {
      if (this.countOfElementShownGetter === 5 && this.slideMove) {
        this.implementHiddenExtraElements(
          this.parentCarousel.querySelector(".carousel-indicators .last"),
          currentSlideTo - this.countOfElementHiddenPrev + 1
        );
        this.implementHiddenExtraElements(
          this.parentCarousel.querySelector(".carousel-indicators .first"),
          currentSlideTo + this.countOfElementHiddenNext
        );
      }
      if (!this.checkIfCountShownGreeterItems(true)) {
        this.checkIfElementExists(
          this.getElementByDataAttribute(firstVal),
          (item) => {
            this.checkIfElementExists(
              this.getElementByDataAttribute(secondVal),
              (item2) => {
                item2.classList.add("hidden");
              }
            );
            item.classList.remove("hidden");
          }
        );
      }
    },
    /**
     * @param currentActiveIndicatorItem
     * @param operation
     * @param value
     * @param elementToShow
     * @desc to hidden last and next element
     * @author karam mustafa
     * @return void
     * */
    implementHiddenElement(
      currentActiveIndicatorItem,
      operation,
      value,
      elementToShow
    ) {
      this.checkIfElementExists(elementToShow, (item) =>
        item.classList.remove("hidden")
      );
      this.allIndicators.forEach((item, index) => {
        let ifCondition = operation == ">=" ? index >= value : index <= value;
        if (ifCondition) {
          let element = this.getElementByDataAttribute(value);
          element.classList.add("hidden");
        }
      });
    },
    /**
     * @param element
     * @param value
     * @author karam mustafa
     * @return void
     * */
    implementHiddenExtraElements(element, value) {
      if (!element.classList.contains("hidden")) {
        let el = this.getElementByDataAttribute(value, "slide-to");
        this.checkIfElementExists(el, (item) => item.classList.add("hidden"));
      }
    },
    /**
     * @param index
     * @param callback
     * @desc un display element by his data attribute
     * @return void
     * @author karam mustafa
     * */
    hiddenElementByData(index, callback) {
      let element = this.getElementByDataAttribute(index);
      return element != null && element.classList ? callback(element) : "";
    },
    /**
     * @param icon
     * @desc disable prev or next icon if we get last or first item
     * @return void
     * @author karam mustafa
     * */
    disableIcon(icon) {
      let el = this.parentCarousel.querySelector(
        `.carousel-control-${this.correctIcon(icon)}-icon`
      );
      return el.classList.add("disabled");
    },
    /**
     * @param icon
     * @desc undisable prev or next icon
     * @return void
     * @author karam mustafa
     * */
    unDisableIcon(icon) {
      let el = this.parentCarousel.querySelector(
        `.carousel-control-${this.correctIcon(icon)}-icon`
      );
      return el.classList.remove("disabled");
    },
    /**
     * @param icon
     * @desc correct icon for direction
     * @return void
     * @author karam mustafa
     * */
    correctIcon(icon) {
      return this.isRTL
        ? icon === "prev"
          ? "next"
          : "prev"
        : icon === "prev"
        ? "prev"
        : "next";
    },
    /**
     * @param element
     * @param icon
     * @param position
     * @desc disable prev or next icon if we get last or first item
     * @return void
     * @author karam mustafa
     * */
    checkIconStatus(element, icon, position) {
      if (element == null) this.disableIcon(icon);
      this.checkIfElementExists(element, (item) => {
        if (item.classList.contains(position)) this.disableIcon(icon);
      });
    },
    /**
     * @desc check icon status , if there any case that the active indicator is in the first or last
     * this functions handle it
     * @return self
     * @author karam mustafa
     * */
    checkAllIcons(element = null) {
      if (element == null)
        element = this.parentCarousel.querySelector(
          `.carousel-indicators .active`
        );
      this.unDisableIcon("next");
      this.unDisableIcon("prev");
      this.checkIconStatus(element, "next", "last");
      this.checkIconStatus(element, "prev", "first");
      return this;
    },
    /**
     * @desc determine direction and implement the correct process
     * @return void
     * @author karam mustafa
     * */
    iconClicked(iconType) {
      return this.isRTL
        ? iconType === "prev"
          ? this.nextIconClicked()
          : this.prevIconClicked()
        : iconType === "prev"
        ? this.prevIconClicked()
        : this.nextIconClicked();
    },
    /**
     * @param value
     * @param data
     * @return void
     * @desc get elemetnt by his data attribute
     * @author karam mustafa
     * */
    getElementByDataAttribute(value, data = "slide-to") {
      return this.parentCarousel.querySelector(`[data-${data}='${value}']`);
    },
    /**
     * @param className
     * @desc to center element when next or prev icon clicked
     * @return void
     * @author karam mustafa
     * */
    getElementsNotHidden(className) {
      return this.parentCarousel.querySelectorAll(
        `.indicators-item:not(.${className})`
      );
    },
    /**
     * @param element
     * @param callback
     * @return callback
     * @author karam mustafa
     * */
    checkIfElementExists(element, callback) {
      return element != null && element.classList ? callback(element) : "";
    },
    /**
     * @param element
     * @param className
     * @param callback
     * @desc determine if specific element has class
     * @return callback
     * @author karam mustafa
     * */
    checkElementContains(element, className, callback) {
      return element.classList.contains(className) ? callback(element) : "";
    },
    /**
     * @param element
     * @param data
     * @return callback
     * @author karam mustafa
     * */
    getDataAttribute(element, data) {
      return this.checkIfElementExists(element, (item) =>
        parseInt(item.dataset[data])
      );
    },
    /**
     * @author karam mustafa
     * */
    activeIndicatorSlideTo() {
      return this.getDataAttribute(
        this.parentCarousel.querySelector(`.carousel-indicators .active`),
        "slideTo"
      );
    },
    /**
     * @author karam mustafa
     * */
    rerenderAfterClick(elementToActive) {
      elementToActive.forEach((item) => {
        this.checkIfElementExists(item, (el) => {
          if (
            !el.classList.contains("first") &&
            !el.classList.contains("last")
          ) {
            el.classList.remove("hidden");
          } else {
            el.classList.remove("hidden");
            this.reHiddenElements(el);
          }
        });
      });
    },
    /**
     * @author karam mustafa
     * */
    reHiddenElements(el) {
      let checkIfFirst = (item) => {
        return el.classList.contains("first")
          ? this.getDataAttribute(item, "slideTo") >=
              this.countOfElementShownGetter
          : this.getDataAttribute(item, "slideTo") <=
              this.countOfElementShownGetter - this.countOfElementShownGetter;
      };
      this.allIndicators.forEach((item) => {
        if (checkIfFirst(item))
          this.checkIfElementExists(item, (el2) => el2.classList.add("hidden"));
      });
    },
    /**
     * @desc this function reset indicator item to default show
     * @author karam mustafa
     * */
    resetIndicator(indicators) {
      indicators.forEach((item) => {
        if (
          this.getDataAttribute(item, "slideTo") <=
          this.countOfElementShownGetter
        ) {
          item.classList.remove("hidden");
        }
      });
      // now we will re active the center element
      this.checkIfElementExists(
        this.getElementByDataAttribute(this.firstItemIndexGetter, "slide-to"),
        (item) => item.classList.add("active")
      );
      this.resetExtraData();
      this.checkAllIcons();
    },
    /**
     * @param {Boolean} reBuildProps
     * @desc
     * @author karam mustafa
     *
     * */
    checkIfCountShownGreeterItems(reBuildProps = false) {
      if (reBuildProps) {
        if (this.items.length <= this.countOfElementShown)
          this.slideEffect = false;
        return this.items.length <= this.countOfElementShown;
      }
      if (this.items.length < this.countOfElementShown) {
        this.countOfElementShownGetter = this.items.length;
        this.firstItemIndexGetter = 0;
        this.centerElementPrevIndexGetter =
          this.countOfElementShown - this.centerElementPrevIndex;
        this.centerElementNextIndexGetter =
          this.countOfElementShown - this.centerElementNextIndex;
        this.lastItemGetter = 0;
        this.firstItemGetter = 0;
        this.checkIfElementExists(
          this.getElementByDataAttribute(this.firstItemGetter),
          (item) => item.classList.add("active")
        );
      }
    },
  },
  watch: {
    items(newValue, oldValue) {
      if (newValue === oldValue) return;
      if (this.activeIndicatorSlideTo() >= this.countOfElementShownGetter) {
        this.resetIndicator(
          this.parentCarousel.querySelectorAll(
            `.carousel-indicators .indicators-item`
          )
        );
      }
      setTimeout(() => this.buildIndicator());
    },
  },
};
</script>

<style scoped lang="scss">
.carousel-control-prev-icon,
.carousel-control-next-icon {
  position: absolute;
  bottom: 15px;
  filter: invert(50%) sepia(0%) saturate(35%) hue-rotate(150deg) brightness(92%)
    contrast(95%);
}

.slider-carousel {
  position: relative;
  width: 100%;
  height: 330px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  cursor: pointer;
}

.carousel-inner > .carousel-item {
  transition: 0s ease-in-out;
}

.carousel-indicators .indicators-item {
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 50%;
  width: 50px;
  border: 1px solid transparent;
  transition: 0.5s all ease-in-out;
  height: 50px;
}

.carousel-indicators .active {
  border: 1px solid var(--green);
}

.carousel-inner {
  clear: both;
  position: absolute;
  width: 100%;
  height: 100%;
}

.hidden {
  width: 0 !important;
  height: 0 !important;
  background: transparent !important;
  margin: 0 !important;
  overflow: hidden;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.2;
}

.caption {
  margin: 15px;
}

.carousel-indicators {
  width: 80%;
  margin-inline-start: 10%;
  right: 10% !important;
  left: 0 !important;
  margin-right: 0 !important;
}

.simple-indicator {
  width: 20px;
  height: 20px;
}
</style>

<style>
.carousel-indicators svg,
.carousel-indicators img {
  filter: invert(50%) sepia(0%) saturate(35%) hue-rotate(150deg) brightness(92%)
    contrast(95%) !important;
}

.carousel-indicators .active svg,
.carousel-indicators .active img {
  filter: invert(58%) sepia(95%) saturate(345%) hue-rotate(102deg)
    brightness(97%) contrast(86%) !important;
}
</style>
