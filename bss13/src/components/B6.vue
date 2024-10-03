<template>
  <div class="mt-2">
    <h2 class="text-3xl">Bài 6</h2>
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Xác nhận"
          variant="flat"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Xác nhận">
          <v-card-text>
            Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu có dữ liệu sẽ được cập nhật.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Xác nhận" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
<script setup></script>
<style></style>
