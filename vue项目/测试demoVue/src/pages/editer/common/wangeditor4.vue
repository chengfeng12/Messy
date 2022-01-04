<template>
  <div :class="prefixCls">
    <div ref="editor" class="editor-wrapper"></div>
  </div>
</template>

<script>
import WEditor from "wangeditor";

export default {
  name: "WangEditor",
  props: {
    prefixCls: {
      type: String,
      default: "my-editor"
    },
    // eslint-disable-next-line
    value: {
      type: String,
      default: ""
    },
    isClear: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: null,
      editorContent: null
    };
  },
  watch: {
    isClear(val) {
      // 触发清除文本域内容
      if (val) {
        this.editor.txt.clear();
        this.editorContent = null;
      }
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    getText() {
      this.editor.txt.text();
    },
    setText(val) {
      this.editor.txt.html(val);
    },
    initEditor() {
      this.editor = new WEditor(this.$refs.editor);
      // this.editor = new E(this.$refs.toolbar, this.$refs.editor)
      this.editor.customConfig.uploadImgShowBase64 = false; // base 64 存储图片
      this.editor.customConfig.showLinkImg = false;//关闭通过图片地址添加图片
      this.editor.customConfig.uploadImgServer =
        "http://xxx.com/upload"; //如果需要本地上传图片 需配置上传图片服务器地址 找后端要
      this.editor.customConfig.uploadImgHeaders = {}; // 自定义 header
      this.editor.customConfig.uploadFileName = "file"; // 后端接受上传文件的参数名
      this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024; // 将图片大小限制为 2M
      this.editor.customConfig.uploadImgMaxLength = 6; // 限制一次最多上传 3 张图片
      this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000; // 设置超时时间
      this.editor.customConfig.emotions = [
        {
          // tab 的标题
          title: "默认",
          // type -> 'emoji' / 'image'
          type: "image",
          // content -> 数组//自定义表情根据文档 自行添加
          content: [
            {
              alt: "[微笑]",
              type: "face",
              src:
                "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e3/2018new_weixioa02_org.png"
            },
            {
              alt: "[可爱]",
              type: "face",
              src:
                "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/09/2018new_keai_org.png"
            },
            {
              alt: "[空星]",
              src:
                "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ff/hot_blankstar_org.png"
            }
          ]
        },
        {
          // tab 的标题
          title: "emoji",
          // type -> 'emoji' / 'image'
          type: "emoji",
          // content -> 数组 自定义表情根据文档 自行添加
          content: [
            "😀",
            "😃",
            "😄",
            "😁",
            "😆",
            "🤣",
            "😄",
            "😅",
            "😆",
            "😉",
            "😊",
            "😋",
            "😎",
            "😍",
            "😘",
            "😗",
            "😚",
            "🙂",
            "🤗",
            "🤔",
            "😳",
            "😑",
            "😶",
            "🙄",
            "😏",
            "😣",
            "😥",
            "😮",
            "🤐",
            "😯",
            "😪",
            "😫",
            "😴",
            "😌",
            "😛",
            "😜",
            "😒",
            "😓",
            "😕",
            "🙃",
            "😲",
            "🙁",
            "😖",
            "😤",
            "😭",
            "😨",
            "😬",
            "😱",
            "😡",
            "😠",
            "😷",
            "🤒",
            "🤧",
            "🤡",
            "😈",
            "💀",
            "👻",
            "👽",
            "💩",
            "😺",
            "😸",
            "😹",
            "😻",
            "😼",
            "😽",
            "🙀",
            "😿",
            "😾",
            "💖",
            "💗",
            "💟",
            "💤",
            "💢",
            "👈",
            "👉",
            "☝",
            "👆",
            "✌",
            "👌",
            "👍",
            "👌",
            "👎",
            "✊",
            "🤛",
            "🤜",
            "👏",
            "🙏",
            "🤝",
            "🌹",
            "🥀"
          ]
        }
      ];
      // 配置菜单 可根据文档进行添加
      this.editor.customConfig.menus = [
        // 'head', // 标题
        // 'bold', // 粗体
        "fontSize", // 字号
        // 'fontName', // 字体
        // 'italic', // 斜体
        "underline", // 下划线
        // 'strikeThrough', // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        // 'link', // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "image", // 插入图片
        // 'quote', // 引用
        "emoticon" // 表情
        // 'table', // 表格
        // 'video', // 插入视频
        // 'code', // 插入代码
        // 'undo', // 撤销
        // 'redo', // 重复
        // 'fullscreen' // 全屏
      ];

      this.editor.customConfig.uploadImgHooks = {
        fail: (xhr, editor, result) => {
          // 插入图片失败回调
          console.log(xhr, editor, result);
        },
        success: (xhr, editor, result) => {
          // 图片上传成功回调
          console.log(xhr, editor, result);
        },
        timeout: (xhr, editor) => {
          // 网络超时的回调
          console.log(xhr, editor);
        },
        error: (xhr, editor) => {
          // 图片上传错误的回调
          console.log(xhr, editor);
        },
        customInsert: (insertImg, result, editor) => {
          // 图片上传成功，插入图片的回调
          // result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是result.data：[{"路径的形式"},...]
          // console.log('result.data[0].url', result.data[0].url)
          // insertImg()为插入图片的函数
          // 循环插入图片
          console.log(editor);
          for (let i = 0; i < 1; i++) {
            console.log("result", result); // 根据格式来赋值
            const src = "http://" + result.data.url; // 如果返回的是完整的src就不用拼接 !!!!这里需要注意
            insertImg(src);
          }
        }
      };
      // 创建富文本编辑器
      this.editor.customConfig.onchange = html => {
        let str = html;
        str = str.replace(/\bm.*?;/, "width:300px"); //更改插入到富文本里图片的宽度
        this.editorContent = str;
        this.$emit("change", this.editorContent); // 将内容同步到父组件中
      };
      this.editor.customConfig.zIndex = 2; // 配置富文本的权重 不然会覆盖其他组件
      this.editor.create();
    }
  }
};
</script>

<style lang="scss" scoped>
.my-editor {
  .editor-wrapper {
    text-align: left;
  }
}
</style>