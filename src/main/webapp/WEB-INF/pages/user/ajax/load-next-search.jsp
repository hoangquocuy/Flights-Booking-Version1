<%-- 
    Document   : load-next-search
    Created on : 05-Dec-2021, 17:38:23
    Author     : QUOC-UY
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/pages/include/taglib.jsp" %>
<c:if test="${flights.size() == 0}">
    <div style="margin-top: 20px;" class="alert alert-danger" role="alert">
        Không có chuyến bay nào phù hợp với tìm kiếm của bạn
    </div>
</c:if>
<c:forEach var="flight" items="${flights}" varStatus="loop">
    <div class="container" style="margin-top: 20px;height: 100px">
        <div class="row">
            <div style="background-color: white" class="col-9">
                <div class="row">
                    <div style="padding-top: 20px;padding-left: 50px" class="col-2">
                        <h3>${flight.flightRoute.departure.city.postCode}</h3>
                        <p><fmt:formatDate type = "time" 
                                        value = "${flight.depart}" /></p>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-4 text-center">
                        <p style="margin-top: 10px">${flight.durationStr}</p>
                        <p  style="margin-top: -15px"><img src="https://www.vietjetair.com/static/media/vietjet.36ac4568.svg" /></p>
                        <p style="margin-top: -15px"><span style="border-right: 2px solid;padding-right: 5px">Bay thẳng</span><span onclick="addTicketDetail(${loop.index})" style="padding-left: 5px;cursor: pointer">Chi tiết</span></p>
                    </div>
                    <div class="col-2"></div>
                    <div style="padding-top: 20px" class="col-2">
                        <h3>${flight.flightRoute.destination.city.postCode}</h3>
                        <p><fmt:formatDate type = "time" 
                                        value = "${flight.arrival}" /></p>
                    </div>
                </div>

            </div>
            <div style="height: 100px;background-color: greenyellow; padding-top: 20px; color: #08c" class="col-3 text-center">

                <c:if test="${flight.discountSave > 0}">
                    <div class="row">
                        <div class="col-3"><p style="margin-top: -10px">Giảm giá : ${flight.discountSave} %</p></div>
                        <div class="col-6"><p><button onclick="location.href = '${pageContext.request.contextPath}/select-flight/${loop.index}'" style="background: yellow;margin-top: 10px" class="btn warning">Chọn vé</button></p></div>
                        <div class="col-2"><p style="margin-top: -10px">Còn ${flight.emptySeat} chỗ</p></div>
                    </div>
                </c:if>
                <c:if test="${flight.discountSave == 0}">
                    <div ><p><button onclick="location.href = '${pageContext.request.contextPath}/select-flight/${loop.index}'" style="background: yellow" class="btn warning">Chọn vé</button></p></div>
                    <div><p style="margin-top: -10px">Còn ${flight.emptySeat} chỗ</p></div>
                </c:if>




            </div>
        </div>

    </div>

    <div id="add-detail" class="detail-booking">
        <div class="container" style="background-color: whitesmoke;height: 240px;padding-top: 20px;padding-left: 40px">
            <div class="row">
                <img src="https://www.vietjetair.com/static/media/vietjet.36ac4568.svg" />
                <span style="margin-left: 10px">Số hiệu chuyến bay : </span>
                <span style="margin-left: 10px;color: red" > VJ ${flight.id}</span>
            </div>
            <div style="margin-top: 10px" class="row">
                <div class="col-1">
                    <p>KHỞI HÀNH</p>
                </div>
                <div class="col-11">
                    <!--                                <p>17:45, 25/10/2021 (Giờ địa phương)</p>-->
                    <!--                                    <p style="margin-top: -18px">Tp. Hồ Chí Minh - Sân bay Tân Sơn Nhất</p>-->
                    <p > ${departure} - ${flight.flightRoute.departure.name}</p>
                </div>
            </div>
            <div style="margin-top: 10px" class="row">
                <div class="col-1">
                    <p>ĐẾN</p>
                </div>
                <div class="col-11">
                    <!--                                    <p>19:05, 25/10/2021 (Giờ địa phương)</p>
                                                        <p style="margin-top: -18px">Đà Nẵng - Sân bay Đà Nẵng</p>-->
                    <p > ${destination} - ${flight.flightRoute.destination.name}</p>
                </div>
            </div>
            <div style="margin-top: 10px" class="row">
                <div class="col-1">

                </div>
                <div class="col-11">
                    <p>
                        Thời gian: ${flight.durationStr} - Máy bay: ${flight.aircraft.name}
                    </p>

                </div>
            </div>
        </div>
    </div>
</c:forEach>