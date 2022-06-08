// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DiffTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiffTwoTone';

export interface DiffTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DiffTwoTone: DiffTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DiffTwoToneSvg} />;

DiffTwoTone.displayName = 'DiffTwoTone';

export default DiffTwoTone;