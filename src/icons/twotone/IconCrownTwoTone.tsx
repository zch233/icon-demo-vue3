// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CrownTwoToneSvg from '@ant-design/icons-svg/es/asn/CrownTwoTone';

export interface CrownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCrownTwoTone: CrownTwoToneIconType = (props, context) => (
    <Icon name='CrownTwoTone' {...{ ...props, ...context.attrs }} icon={CrownTwoToneSvg} />
);

IconCrownTwoTone.displayName = 'IconCrownTwoTone';

export default IconCrownTwoTone;