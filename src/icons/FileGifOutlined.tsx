// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined';

export interface FileGifOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileGifOutlined: FileGifOutlinedIconType = (props, context) => <Icon name='FileGifOutlined' {...{ ...props, ...context.attrs }} icon={FileGifOutlinedSvg} />;

FileGifOutlined.displayName = 'FileGifOutlined';

export default FileGifOutlined;