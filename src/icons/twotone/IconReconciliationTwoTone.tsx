// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReconciliationTwoToneSvg from 'icon-base/es/asn/ReconciliationTwoTone';

export interface ReconciliationTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconReconciliationTwoTone: ReconciliationTwoToneIconType = (props, context) => (
    <Icon name='ReconciliationTwoTone' {...{ ...props, ...context.attrs }} icon={ReconciliationTwoToneSvg} />
);

IconReconciliationTwoTone.displayName = 'IconReconciliationTwoTone';
IconReconciliationTwoTone.theme = 'twotone';
IconReconciliationTwoTone.originName = 'reconciliation';

export default IconReconciliationTwoTone;
