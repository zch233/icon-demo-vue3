// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled';

export interface ReconciliationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ReconciliationFilled: ReconciliationFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ReconciliationFilledSvg} />;

ReconciliationFilled.displayName = 'ReconciliationFilled';

export default FunctionalComponent;