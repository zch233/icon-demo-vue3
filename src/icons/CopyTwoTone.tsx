// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone';

export interface CopyTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CopyTwoTone: CopyTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CopyTwoToneSvg} />;

CopyTwoTone.displayName = 'CopyTwoTone';

export default CopyTwoTone;