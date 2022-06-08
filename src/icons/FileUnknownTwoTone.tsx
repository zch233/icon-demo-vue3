// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone';

export interface FileUnknownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileUnknownTwoTone: FileUnknownTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileUnknownTwoToneSvg} />;

FileUnknownTwoTone.displayName = 'FileUnknownTwoTone';

export default FunctionalComponent;