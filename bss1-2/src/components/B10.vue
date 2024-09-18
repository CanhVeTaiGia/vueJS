<template>
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row flex justify-center items-center h-100">
          <div class="col col-xl-10">
            <div class="card border border-blue-500 rounded-lg">
              <div class="card-body p-5">
                <h3 class="text-center mb-10">Quản lý công việc</h3>
                <form class="flex justify-center items-center mb-4">
                  <div class="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      class="form-control border border-gray-300 rounded-lg p-2"
                    />
                    <label class="form-label" for="form2">Thêm công việc</label>
                  </div>
                  <button type="submit" class="btn btn-info ml-2">Thêm</button>
                </form>
                <ul
                  class="nav nav-tabs mb-4 pb-2 border-b-2 border-gray-300"
                  id="ex1"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active">
                    <ul class="list-group mb-0">
                      <li
                        class="list-group-item flex items-center justify-between border border-gray-300 rounded-lg mb-2 p-2 bg-gray-100"
                      >
                        <div>
                          <input
                            class="form-check-input mr-2"
                            type="checkbox"
                            checked
                          />
                          <s>Cras justo odio</s>
                        </div>
                        <div>
                          <a href="#!" class="text-info" title="Sửa công việc"
                            ><i class="fas fa-pencil-alt mr-3"></i>
                          </a>
                          <a href="#!" class="text-danger" title="Xóa công việc"
                            ><i class="fas fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                      <li
                        class="list-group-item flex items-center justify-between border border-gray-300 rounded-lg mb-2 p-2 bg-gray-100"
                      >
                        <div>
                          <input class="form-check-input" type="checkbox" />
                          Cras justo odio
                        </div>
                        <div>
                          <a href="#!" class="text-info" title="Sửa công việc"
                            ><i class="fas fa-pencil-alt mr-3"></i>
                          </a>
                          <a href="#!" class="text-danger" title="Xóa công việc"
                            ><i class="fas fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>

  </style>
  