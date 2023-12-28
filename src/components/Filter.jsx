import React from "react";
import "/dist/css/main.css";

const Filter = (props) => {
  return (
    <>
      <div className="filter">
        <div className="filter-body">
          {/* <h5 className="filter-title fw-bold">Filter</h5>
          <div className="filter-category d-grid">
            <div className="label-filter">
              <input
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => props.setFilterData(e)}
              />
              <span className="checkmark"></span> Paling Baru
            </div>
            <div className="label-filter">
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span> Paling Populer
            </div>
            <div className="label-filter">
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>Promo
            </div>
          </div> */}

          <h5 className="filter-title">Kategori</h5>

          <div className="filter-category d-grid">
            <div className="label-filter">
              <input
                checked={props?.kategoriData?.find((e) => e === "UIUX_DESIGN")}
                type="checkbox"
                value="UIUX_DESIGN"
                id="flexCheckDefault"
                onChange={(e) =>
                  // UIX
                  // PM
                  // Android
                  props.setKategoriData(
                    // function untuk simpan kategori
                    props.kategoriData.find((item) => item === e.target.value) // cek apakah kategori yang dipilih sudah ada di dalam array atau belum
                      ? props.kategoriData.filter(
                          // kalau misalkan ada, hapus kategori tersebut dengan menggunakan filter
                          (item) => item !== e.target.value // mengembalikan data yang tidak di pilih
                        )
                      : [...props.kategoriData, e.target.value] // kalau misalkan tidak ada, masukkan kategori yang dipilih ke dalam array
                  )
                }

                // [...]  {...}
                // ['BE','PM','FE'] = props.kategoriData
                // 'UIX' = e.target.value
                // [props.kategoriData, e.target.value]
                // [['BE','PM','FE'],'UIX']
                // [...props.kategoriData, e.target.value]
                // ['BE','PM','FE','UIX]
                // SPREAD OPERATOR
                // IF(props.kategoriData.find((item) => item === e.target.value)){
                //  logic true
                //  props.kategoriData.filter()
                // } else {
                //  logic false
                //  [props.kategoriData, e.target.value]
                // }
                // TERNARY OPERATOR
                // STATEMENT? LOGIC TRUE : LOGIC FALSE
              />
              <span className="checkmark"></span>UI/UX Design
            </div>
            <div className="label-filter">
              <input
                checked={props?.kategoriData?.find(
                  (e) => e === "PRODUCT_MANAGEMENT"
                )}
                type="checkbox"
                value="PRODUCT_MANAGEMENT"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setKategoriData(
                    props.kategoriData.find((item) => item === e.target.value)
                      ? props.kategoriData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.kategoriData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>Product Management
            </div>
            <div className="label-filter">
              <input
                checked={props.kategoriData.find(
                  (e) => e === "WEB_DEVELOPMENT"
                )}
                type="checkbox"
                value="WEB_DEVELOPMENT"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setKategoriData(
                    props.kategoriData.find((item) => item === e.target.value)
                      ? props.kategoriData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.kategoriData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>Web Development
            </div>
            <div className="label-filter">
              <input
                checked={props.kategoriData.find(
                  (e) => e === "ANDROID_DEVELOPMENT"
                )}
                type="checkbox"
                value="ANDROID_DEVELOPMENT"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setKategoriData(
                    props.kategoriData.find((item) => item === e.target.value)
                      ? props.kategoriData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.kategoriData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>Android Development
            </div>
            <div className="label-filter">
              <input
                checked={props.kategoriData.find(
                  (e) => e === "IOS_DEVELOPMENT"
                )}
                type="checkbox"
                value="IOS_DEVELOPMENT"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setKategoriData(
                    props.kategoriData.find((item) => item === e.target.value)
                      ? props.kategoriData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.kategoriData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>IOS Development
            </div>
          </div>

          <h5 className="filter-title">Level Kesulitan</h5>

          <div className="filter-category d-grid">
            <div className="label-filter">
              <input
                checked={props.levelData.find((e) => e === "BEGINNER_LEVEL")}
                type="checkbox"
                value="BEGINNER_LEVEL"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setLevelData(
                    props.levelData.find((item) => item === e.target.value)
                      ? props.levelData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.levelData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>Beginner Level
            </div>
            <div className="label-filter">
              <input
                checked={props.levelData.find(
                  (e) => e === "INTERMEDIATE_LEVEL"
                )}
                type="checkbox"
                value="INTERMEDIATE_LEVEL"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setLevelData(
                    props.levelData.find((item) => item === e.target.value)
                      ? props.levelData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.levelData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>Intermediate Level
            </div>
            <div className="label-filter">
              <input
                checked={props.levelData.find((e) => e === "ADVANCE_LEVEL")}
                type="checkbox"
                value="ADVANCE_LEVEL"
                id="flexCheckDefault"
                onChange={(e) =>
                  props.setLevelData(
                    props.levelData.find((item) => item === e.target.value)
                      ? props.levelData.filter(
                          (item) => item !== e.target.value
                        )
                      : [...props.levelData, e.target.value]
                  )
                }
              />
              <span className="checkmark"></span>Advanced Level
            </div>
          </div>
        </div>

        <div className="btn-hapus-filter d-flex justify-content-center">
          <button
            className="btn bg-transparent text-danger border border-0 align-items-center fw-bold"
            style={{ fontSize: "12px" }}
            // passing function dari PilihPremium.jsx
            // running functionnya di onClick
            // onCliuck={()=>{namaFunctionYangDiPassing()}}

            onClick={() => {
              props.buttonHapusFilter();
            }}
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
