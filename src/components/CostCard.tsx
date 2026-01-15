import React from "react";
import { DollarSign } from "lucide-react";
import { formatCurrency } from "../lib/calculations.tsx";
import type { CostBreakdown, ParameterConfig } from "../lib/calculations.tsx";

type CostCardProps = {
  costs: CostBreakdown;
  parameterConfig: ParameterConfig;
  projectName?: string;
  UI_TEXT: any;
  grams: string;
  hours: string;
  minutes: string;
};

const textColor = { color: "var(--text)" };

function CostRow({
  label,
  value,
  valueColor = "var(--text)",
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  valueColor?: string;
}) {
  return (
    <div className="flex justify-between">
      <span style={textColor}>{label}</span>
      <span className="font-mono" style={{ color: valueColor }}>
        {value}
      </span>
    </div>
  );
}

function TotalCostRow({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-lg font-semibold" style={textColor}>{label}</span>
      <span className="font-mono text-2xl font-bold" style={textColor}>
        {value}
      </span>
    </div>
  );
}

export function CostCard({
  costs,
  parameterConfig,
  projectName,
  UI_TEXT,
}: CostCardProps) {
  const { enabled, value, useDiscount } = parameterConfig;
  const { COST_DETAILS } = UI_TEXT;

  return (
    <div className="rounded-lg p-6 bg-[var(--bg1)] border border-[var(--border-subtle)]">
      <div className="mb-4">
        <h2
          className="text-xl font-semibold flex items-center gap-2"
          style={textColor}
        >
          <DollarSign className="w-5 h-5 text-[var(--accent)]" />
          {COST_DETAILS.TITLE}
        </h2>

        {!!projectName?.trim() && (
          <div className="my-4 px-2 text-center">
            <p
              className="text-2xl font-extrabold leading-snug break-words"
              style={{ color: "var(--text)", overflowWrap: "anywhere" }}
            >
              {projectName}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-2 text-sm bg-[var(--bg1)] p-4 rounded border border-[var(--border-subtle)]">
        {enabled.pricePerKg && (
          <CostRow
            label={COST_DETAILS.MATERIAL_COST}
            value={formatCurrency(costs.materialCost)}
          />
        )}

        {enabled.pricePerHour && (
          <CostRow
            label={COST_DETAILS.TIME_COST}
            value={formatCurrency(costs.printTimeCost)}
          />
        )}

        {enabled.electricityConsumption && enabled.electricityPrice && (
          <CostRow
            label={COST_DETAILS.ELECTRICITY_COST}
            value={formatCurrency(costs.electricityCost)}
          />
        )}

        {enabled.flatWorkFee && (
          <CostRow
            label={COST_DETAILS.WORK_FEE}
            value={formatCurrency(costs.flatWorkFee)}
          />
        )}

        <hr className="border-[var(--border-subtle)]" />

        <CostRow
          label={COST_DETAILS.SUBTOTAL}
          value={formatCurrency(costs.subtotal)}
        />

        {enabled.markup && (
          <CostRow
            label={
              useDiscount
                ? COST_DETAILS.DISCOUNT_LABEL(value.markup)
                : COST_DETAILS.MARKUP_LABEL(value.markup)
            }
            value={
              <>
                {useDiscount && costs.markupAmount > 0 && "-"}
                {formatCurrency(costs.markupAmount)}
              </>
            }
          />
        )}

        <hr className="border-[var(--border-subtle)]" />

        <TotalCostRow
          label={COST_DETAILS.TOTAL}
          value={formatCurrency(costs.total)}
        />
      </div>
    </div>
  );
}

export default CostCard;
