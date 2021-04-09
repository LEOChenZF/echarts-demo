import Bar from "@/views/bar";
import Pie from "@/views/pie";
import Polyline from "@/views/polyline";
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
  {
    path: "/pie",
    name: "pie",
    component: Pie,
    meta: {
      title: "柱状图",
    },
  },
  {
    path: "/polyline",
    name: "polyline",
    component: Polyline,
    meta: {
      title: "折线图",
    },
  },
];
export default echarts;
