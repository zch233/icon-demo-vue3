// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined';

export interface DeliveredProcedureOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DeliveredProcedureOutlined: DeliveredProcedureOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DeliveredProcedureOutlinedSvg} />;

DeliveredProcedureOutlined.displayName = 'DeliveredProcedureOutlined';

export default FunctionalComponent;