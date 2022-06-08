// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone';

export interface FolderOpenTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FolderOpenTwoTone: FolderOpenTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FolderOpenTwoToneSvg} />;

FolderOpenTwoTone.displayName = 'FolderOpenTwoTone';

export default FolderOpenTwoTone;