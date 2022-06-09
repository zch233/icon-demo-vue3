// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone';

export interface CiTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CiTwoTone: CiTwoToneIconType = (props, context) => <Icon name='CiTwoTone' {...{ ...props, ...context.attrs }} icon={CiTwoToneSvg} />;

CiTwoTone.displayName = 'CiTwoTone';

export default CiTwoTone;