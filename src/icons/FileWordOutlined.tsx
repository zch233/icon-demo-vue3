// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileWordOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined';

export interface FileWordOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileWordOutlined: FileWordOutlinedIconType = (props, context) => <Icon name='FileWordOutlined' {...{ ...props, ...context.attrs }} icon={FileWordOutlinedSvg} />;

FileWordOutlined.displayName = 'FileWordOutlined';

export default FileWordOutlined;