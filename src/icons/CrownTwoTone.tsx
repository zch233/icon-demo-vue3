// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/CrownTwoTone';

export interface CrownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CrownTwoTone: CrownTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CrownTwoToneSvg} />;

CrownTwoTone.displayName = 'CrownTwoTone';

export default FunctionalComponent;