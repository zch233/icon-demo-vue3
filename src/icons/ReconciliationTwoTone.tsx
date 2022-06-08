// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone';

export interface ReconciliationTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ReconciliationTwoTone: ReconciliationTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ReconciliationTwoToneSvg} />;

ReconciliationTwoTone.displayName = 'ReconciliationTwoTone';

export default FunctionalComponent;