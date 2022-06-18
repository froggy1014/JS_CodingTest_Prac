// 스택이란 자료구조를 쓰는 재귀함수가 호출될때 스택 프레임이라는 함수의 정보들이 저장된 어떻게 돌아가는지 이해필요 
// 재귀함수 : 자기자신을 호출한다.
// DFS(3) -> DFS(2) -> DFS(1) -> DFS(0)
function solution(n){
    function DFS(L){
      if(L==0) return; 
      else{
        DFS(L-1)
        console.log(L);
      }
    }
    DFS(n)
}
solution(3);


// return은 반환을 뜻하기도 하지만 뒤에 아무것도 없다면 함수종료의 뜻을 지님