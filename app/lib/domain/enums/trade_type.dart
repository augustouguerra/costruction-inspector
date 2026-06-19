enum TradeType {
  plumber,
  electrician,
  carpenter,
  painter,
  hvac,
  mason,
  tiler,
  glazier,
  general,
  unknown;

  String get label => switch (this) {
        TradeType.plumber => 'Plumber',
        TradeType.electrician => 'Electrician',
        TradeType.carpenter => 'Carpenter',
        TradeType.painter => 'Painter',
        TradeType.hvac => 'HVAC',
        TradeType.mason => 'Mason',
        TradeType.tiler => 'Tiler',
        TradeType.glazier => 'Glazier',
        TradeType.general => 'General',
        TradeType.unknown => 'Unknown',
      };

  static TradeType fromString(String value) {
    return TradeType.values.firstWhere(
      (e) => e.name == value,
      orElse: () => TradeType.unknown,
    );
  }
}
