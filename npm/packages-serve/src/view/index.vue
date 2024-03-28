<template>
  <div id="editor">
    <work-editor :componentGroupList="$componentMetas"></work-editor>
  </div>
</template>
<script>
  import devWorkJson from "./index_work.json";
  export default {
    created() {
      if (!window.h5plus.utils.sessionCache.get("work_state_dev")) {
        window.h5plus.utils.sessionCache.set("work_state_dev", devWorkJson);
      }
    }
  };
</script>
