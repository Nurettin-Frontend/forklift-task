<template>
  <div class="data-table">
    <el-card class="px-4 mt-4">
    <h3 class="mb-4"><i class="el-icon-guide mr-3"></i><b>Repair List</b></h3>
      <el-table
        :data="pagedTableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="vechile" label="Vechile" width="150px">
          <template slot-scope="scope">
            <span class="vechile">{{ scope.row.vechile }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="issue" label="Issue" width="350px">
          <template slot-scope="scope">
            <span class="span-font"
              ><b>{{ scope.row.issue.slice(0, 20) }}</b></span
            ><span class="span-font">{{
              scope.row.issue.slice(20, scope.row.issue.length)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="priority" label="Priority">
          <template slot-scope="scope">
            <span
              class="priority"
              :class="
                scope.row.priority == 'high' ? 'error-color' : 'warrning-color'
              "
              style="margin-left: 10px"
              >{{ scope.row.priority }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="current_status" label="Current Status">
          <template slot-scope="scope">
            <span
              class="span-font complited"
              :class="
                scope.row.current_status == 'Complited'
                  ? 'success-bg'
                  : 'error-bg'
              "
            ></span
            ><span class="span-font">{{ scope.row.current_status }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Date">
          <template slot-scope="scope"
            ><span class="span-font">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="view" label="Nombre">
          <el-button class="view-btn"> View </el-button>
        </el-table-column>
      </el-table>

      <div class="page-counter">
        <div class="number-of-page" style="text-align: left">
          <span class="title">showing 1 to {{ pagedTableData.length }} </span>
          <el-select v-model="value" :placeholder="page.toString()" disabled>
            <!-- <el-option
            v-for="item in selectedLength"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option> -->
          </el-select>
        </div>
        <div class="pagination" style="text-align: right">
          <el-pagination
            layout="prev, pager, next"
            :total="tableData2.length * 1.5"
            @current-change="setPage"
          >
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DataTableFork",
  inheritAttrs: false,
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
      ],
      value: "",
      page: 1,
      pageSize: 7,
      columns: [
        {
          prop: "vechile",
          label: "Vechile",
          sortable: true,
        },
        {
          prop: "issue",
          label: "Issue",
        },
        {
          prop: "priority",
          label: "Priority",
          sortable: true,
        },
        {
          prop: "current_status",
          label: "Current Status",
          sortable: true,
        },
        {
          prop: "date",
          label: "Date",
          sortable: true,
        },
        {
          prop: "view",
          label: "View",
        },
      ],
      tableData2: [
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "high",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "high",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcos",
          priority: "high",
          current_status: "Not Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "high",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          priority: "low",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "high",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "low",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "high",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
        {
          vechile: "11",
          issue: "Bla bla bla bla",
          priority: "low",
          current_status: "Complited",
          date: "07-6-2020",
          view: "View",
        },
      ],
      tableData: [],
    };
  },
  computed: {
    pagedTableData() {
      return this.tableData2.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
    selectedLength() {
      return this.tableData2.length / 7;
    },
  },
  methods: {
    setPage(val) {
      console.log(val);
      this.page = val;
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      }
      return "";
    },
  },
  created() {
    for (let i = 0; i < this.tableData2.length; i++) {
      console.log(this.tableData2.length);
      this.tableData.push({
        vechile: `${i}`,
        issue: "Bla bla bla bla",
        priority: "high",
        current_status: "Complited",
        date: "07-6-2020",
        view: "View",
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.data-table h3 i{
  font-size: 40px
}
.el-table .warning-row {
  background: #f5f5f5;
}
.vechile {
  padding: 5px 35px;
  text-align: center;
  color: white;
  display: inline-block;
  border-radius: 3px;
  background: rgb(87 165 87);
}
.priority {
  border-radius: 5px;
  display: block;
  width: 50px;
  text-align: center;
  padding: 10px 5px;
  margin-left: 0px !important;
}
.error-color {
  color: red;
  background: #e4676717;
}
.warrning-color {
  color: orange;
  background: #efc47642;
}

.complited {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-block;
  margin-top: 5px;
}
.success-bg {
  background: rgb(87 165 87);
}
.error-bg {
  background: #c03838;
}
.view-btn {
  border-radius: 5px !important;
  background: #a6f0a633 !important;
  border: 2px solid rgb(87 165 87) !important;
}
.pagination {
  margin-right: 40px;
  margin-top: 30px;
}
.pagination ul li {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  text-align: center;
  padding: 10px 0px;
  transition: 0.1s;
  border: 1px solid transparent;
}
.pagination .active {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.pagination button {
  height: 50px !important;
}
.pagination button i {
  font-size: 30px !important;
  font-weight: 900 !important;
}

.page-counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.number-of-page {
  margin-top: 30px;
  margin-left: 40px;
}
.number-of-page .title {
  margin-right: 25px;
}
.number-of-page input {
  width: 80px !important;
}
.number-of-page .el-select i,
.number-of-page .el-select input {
  color: green !important;
}
.span-font {
  font-size: 16px;
}
</style>
