import Bar from "@/views/bar";
import Index from "@/views";
const echarts = [
  {
    path: "/index",
    name: "index",
    component: Index,
    meta: {
      title: "柱状图",
    },
  },
  {
    path: "/bar",
    name: "bar",
    component: Bar,
    meta: {
      title: "柱状图",
    },
  },
];
export default echarts;
