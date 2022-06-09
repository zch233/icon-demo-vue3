// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CrownFilledSvg from '@ant-design/icons-svg/es/asn/CrownFilled';

export interface CrownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCrownFilled: CrownFilledIconType = (props, context) => (
    <Icon name='CrownFilled' {...{ ...props, ...context.attrs }} icon={CrownFilledSvg} />
);

IconCrownFilled.displayName = 'IconCrownFilled';

export default IconCrownFilled;