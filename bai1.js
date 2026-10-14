const subscriptions = [
    { subscriptionId: "SUB-001", customerName: "Nguyen Van An", planTier: "FAMILY", deviceLimit: 5, daysOverdue: 3, status: "ACTIVE" },
    { subscriptionId: "SUB-002", customerName: "Tran Thi Mai", planTier: "FAMILY", deviceLimit: 5, daysOverdue: 4, status: "ACTIVE" }
];

function auditSubscriptions(list) {
    for (let i = 0; i < list.length; i++) {
        const sub = list[i];

        if (sub.daysOverdue > 0) {
            if (sub.daysOverdue >= 3) {
                sub.planTier = "FREE";
                sub.deviceLimit = 1;
                sub.status = "EXPIRED";
            } else {
                sub.status = "GRACE_PERIOD";
            }
        }
    }
}

auditSubscriptions(subscriptions);

console.log("===== BÁO CÁO HỘI VIÊN =====");

for (let i = 0; i < subscriptions.length; i++) {
    console.log(
        subscriptions[i].subscriptionId,
        "|", subscriptions[i].customerName,
        "|", subscriptions[i].planTier,
        "| Thiết bị:", subscriptions[i].deviceLimit,
        "| Quá hạn:", subscriptions[i].daysOverdue,
        "| Trạng thái:", subscriptions[i].status
    );
}
// Kiểm tra số ngày quá hạn để cập nhật gói, giới hạn thiết bị và trạng thái.