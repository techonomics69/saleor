import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import i18n from "@saleor/i18n";
import { ListActions, PageListProps } from "@saleor/types";
import { VoucherList_vouchers_edges_node } from "../../types/VoucherList";
import VoucherList from "../VoucherList";

export interface VoucherListPageProps extends PageListProps, ListActions {
  defaultCurrency: string;
  vouchers: VoucherList_vouchers_edges_node[];
}

const VoucherListPage: React.StatelessComponent<VoucherListPageProps> = ({
  defaultCurrency,
  disabled,
  settings,
  onAdd,
  onNextPage,
  onPreviousPage,
  onUpdateListSettings,
  onRowClick,
  pageInfo,
  vouchers,
  isChecked,
  selected,
  toggle,
  toggleAll,
  toolbar
}) => (
  <Container>
    <PageHeader title={i18n.t("Vouchers")}>
      <Button onClick={onAdd} variant="contained" color="primary">
        {i18n.t("Add voucher")}
        <AddIcon />
      </Button>
    </PageHeader>
    <VoucherList
      defaultCurrency={defaultCurrency}
      settings={settings}
      disabled={disabled}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      onUpdateListSettings={onUpdateListSettings}
      onRowClick={onRowClick}
      pageInfo={pageInfo}
      vouchers={vouchers}
      isChecked={isChecked}
      selected={selected}
      toggle={toggle}
      toggleAll={toggleAll}
      toolbar={toolbar}
    />
  </Container>
);
VoucherListPage.displayName = "VoucherListPage";
export default VoucherListPage;
