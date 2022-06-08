// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone';

export interface CopyrightTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CopyrightTwoTone: CopyrightTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CopyrightTwoToneSvg} />;

CopyrightTwoTone.displayName = 'CopyrightTwoTone';

export default FunctionalComponent;