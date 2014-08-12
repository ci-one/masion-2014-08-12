/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('requestApp')
    .controller('requestWriteCtrl', function ($scope, $location, newWinParamExtract) {

        var paramList = newWinParamExtract.getParamList($location.absUrl());

        if (paramList.length > 0) {
            $scope.type = paramList[0]['type'];
        }

        $scope.bizTypeList = [
            {type: '농업, 임업 및 어업', checked: false}
            ,
            {type: '광업', checked: false}
            ,
            {type: '제조업', checked: false}
            ,
            {type: '전기, 가스, 수도', checked: false}
            ,
            {type: '폐기물, 환경복원', checked: false}
            ,
            {type: '건설업', checked: false}
            ,
            {type: '도매 및 소매', checked: false}
            ,
            {type: '운수업', checked: false}
            ,
            {type: '숙박 및 음식점업', checked: false}
            ,
            {type: '출판, 영상, 정보 등', checked: false}
            ,
            {type: '금융, 보험', checked: false}
            ,
            {type: '부동산, 임대', checked: false}
            ,
            {type: '전문, 과학, 기술', checked: false}
            ,
            {type: '사업시설, 사업지원', checked: false}
            ,
            {type: '행정, 국방, 사회보장', checked: false}
            ,
            {type: '교육서비스', checked: false}
            ,
            {type: '보건 및 사회복지', checked: false}
            ,
            {type: '예술, 스포츠, 여가', checked: false}
            ,
            {type: '협회, 수리, 개인', checked: false}
            ,
            {type: '자가소비생산활동', checked: false}
            ,
            {type: '국제 및 외국기관', checked: false}
            ,
            {type: '기타', checked: false}
        ];

        $scope.exampleList = [
            {contents: '해당 예산으로 제품을 구매할 수 있는지 알고 싶습니다.'}
            ,
            {contents: '기존 시스템을 리뉴얼 하고 싶습니다.'}
            ,
            {contents: '내용들'}
            ,
            {contents: '내용들2'}
            ,
            {contents: '내용들3'}
            ,
            {contents: '내용들4'}
            ,
            {contents: '내용들5'}
            ,
            {contents: '타입에 따라 DB에서 올거'}
        ];

        $scope.selectContents = $scope.exampleList[0].value;

        $scope.moneyList = [
            {money: '협의한 바 없음'}
            ,
            {money: '100만원 미만'}
        ];

        $scope.selChange = function (exam) {
            if ($scope.board.contents === undefined)
                $scope.board.contents = '';

            $scope.board.contents = $scope.board.contents + ' ' + exam;
        };

        $scope.warning = function(error) {

            if(error)
            {
                alert('유효한 값이 아닙니다.\n붉은 박스는 필수 입력 사항입니다.');
                return;
            }

            $('#modal-agree').modal('show');
        };

        $scope.agree = function() {
            if(!$scope.board.agree) {
                alert('동의하지 않으시면 진행할 수 없습니다.');
                return;
            }

            // save

            $('#modal-agree').modal('hide');
        };

        $scope.cancel = function() {
            $('#modal-agree').modal('hide');
        };

    });
