import 'package:flutter/material.dart';

import '../../core/theme/app_colors.dart';
import '../../domain/enums/trade_type.dart';

class TradeBadge extends StatelessWidget {
  final TradeType trade;
  final bool small;

  const TradeBadge({super.key, required this.trade, this.small = false});

  @override
  Widget build(BuildContext context) {
    final color = AppColors.tradeColors[trade.name] ?? AppColors.tradeColors['unknown']!;
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: small ? 8 : 12,
        vertical: small ? 3 : 5,
      ),
      decoration: BoxDecoration(
        color: color.withAlpha(38),
        border: Border.all(color: color),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: small ? 6 : 8,
            height: small ? 6 : 8,
            decoration: BoxDecoration(color: color, shape: BoxShape.circle),
          ),
          SizedBox(width: small ? 4 : 6),
          Text(
            trade.label,
            style: TextStyle(
              color: color,
              fontSize: small ? 11 : 13,
              fontWeight: FontWeight.w600,
            ),
          ),
        ],
      ),
    );
  }
}
