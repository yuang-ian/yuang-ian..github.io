document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function largeSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/img/nvidia/';
                        break;
                    case 1:
                        image.src = 'assets/img/jhu/';
                        break;
                    case 2:
                        image.src = 'assets/img/Barn/';
                        break;
                    case 3:
                        image.src = 'assets/img/Caterpillar/';
                        break;
                    case 4:
                        image.src = 'assets/img/Courthouse/';
                        break;
                    case 5:
                        image.src = 'assets/img/Ignatius/';
                        break;
                    case 6:
                        image.src = 'assets/img/Meetingroom/';
                        break;
                    case 7:
                        image.src = 'assets/img/Truck/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/rgb.png';
                        break;
                    case 1:
                        image.src = image.src + '/mesh.png';
                        break;
                    case 2:
                        image.src = image.src + '/normal.png';
                        break;
                }
            }

            scene_list = document.getElementById("large-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("large-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+2) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEventGarden(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'static/videos/compare/GSVC/';
                        break;
                    case 1:
                        image.src = 'static/videos/compare/AV1/';
                        break;
                    case 2:
                        image.src = 'static/videos/compare/AVC/';
                        break;
                    case 3:
                        image.src = 'static/videos/compare/HEVC/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'Beauty.mp4';
                        break;
                    case 1:
                        image.src = image.src + 'HoneyBee.mp4';
                        break;
                    case 2:
                        image.src = image.src + 'Jockey.mp4';
                        break;
                }
            }

            let scene_list = document.getElementById("object-scale-recon-garden").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEventBonsai(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'static/images/360_images/bonsai_l0';
                        break;
                    case 1:
                        image.src = 'static/images/360_images/bonsai_l1';
                        break;
                    case 2:
                        image.src = 'static/images/360_images/bonsai_l2';
                        break;
                    case 3:
                        image.src = 'static/images/360_images/bonsai_l3';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_downsample.png';
                        break;
                    case 1:
                        image.src = image.src + '_single.png';
                        break;
                    case 2:
                        image.src = image.src + '_ours.png';
                        break;
                    case 3:
                        image.src = image.src + '_multiscale.png';
                        break;

                }
            }

            let scene_list = document.getElementById("object-scale-recon-bonsai").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360_stmt_ablation/bicycle_0';
                        break;
                    case 1:
                        image.src = 'resources/360_stmt_ablation/bicycle_3';
                        break;
                    case 2:
                        image.src = 'resources/360_stmt_ablation/bicycle_5';
                        break;
                    case 3:
                        image.src = 'resources/360_stmt_ablation/garden_0';
                        break; 
                    case 4:
                        image.src = 'resources/360_stmt_ablation/garden_1';
                        break;
                    case 5:
                        image.src = 'resources/360_stmt_ablation/treehill_9';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_no3d.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_upgt.jpg';
                        break;
                    case 3:
                        image.src = image.src + '_gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }